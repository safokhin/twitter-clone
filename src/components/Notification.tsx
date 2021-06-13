import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {Alert} from "@material-ui/lab";
import {Color} from "@material-ui/lab/Alert";


interface NotificationProps {
  children: (callback: (text: string, type: Color) => void) => React.ReactElement;
}

export const Notification: React.FC<NotificationProps> = ({ children }): React.ReactElement => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [notificationObj, setNotificationObj] = React.useState<{ text: string, type: Color }>({text: 'Неверный логин или пароль',type: 'error'});

  const openNotification = (text: string, type: Color) => {
    setOpen(true);
    setNotificationObj({
      text, type
    });
  }

  return (
    <>
      {children(openNotification)}
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={notificationObj.type}>
          {notificationObj.text}
        </Alert>
      </Snackbar>
    </>
  )
}
