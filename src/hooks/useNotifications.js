import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { 
  NotificationContainer, 
  Notification, 
  NotificationContent, 
  NotificationIcon, 
  NotificationText, 
  NotificationClose 
} from '../components/UIComponents';

const notificationVariants = {
  initial: { 
    opacity: 0, 
    x: 300,
    scale: 0.8
  },
  animate: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  },
  exit: { 
    opacity: 0, 
    x: 300,
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = Date.now() + Math.random();
    const newNotification = {
      id,
      type: 'info',
      title: 'Notification',
      message: '',
      duration: 5000,
      ...notification,
    };

    setNotifications(prev => [...prev, newNotification]);

    // Auto remove notification after duration
    if (newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, newNotification.duration);
    }

    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const showSuccess = useCallback((title, message, options = {}) => {
    return addNotification({ type: 'success', title, message, ...options });
  }, [addNotification]);

  const showError = useCallback((title, message, options = {}) => {
    return addNotification({ type: 'error', title, message, duration: 8000, ...options });
  }, [addNotification]);

  const showWarning = useCallback((title, message, options = {}) => {
    return addNotification({ type: 'warning', title, message, ...options });
  }, [addNotification]);

  const showInfo = useCallback((title, message, options = {}) => {
    return addNotification({ type: 'info', title, message, ...options });
  }, [addNotification]);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const NotificationComponent = () => (
    <NotificationContainer>
      <AnimatePresence>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            $type={notification.type}
            variants={notificationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
          >
            <NotificationContent>
              <NotificationIcon $type={notification.type}>
                {notification.type === 'success' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                )}
                {notification.type === 'error' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                )}
                {notification.type === 'warning' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                )}
                {notification.type === 'info' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                )}
              </NotificationIcon>
              <NotificationText>
                <h4>{notification.title}</h4>
                <p>{notification.message}</p>
              </NotificationText>
            </NotificationContent>
            <NotificationClose onClick={() => removeNotification(notification.id)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </NotificationClose>
          </Notification>
        ))}
      </AnimatePresence>
    </NotificationContainer>
  );

  return {
    notifications,
    addNotification,
    removeNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    clearAll,
    NotificationComponent
  };
};
