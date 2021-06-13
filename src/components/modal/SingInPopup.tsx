import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {TextField} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import {useHomeStyles} from "../../pages/home/theme";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Notification} from "../Notification";
import {Color} from "@material-ui/lab/Alert";
import {useDispatch, useSelector} from "react-redux";
import {fetchSignIn} from "../../store/ducks/user/actionCreators";
import {selectUserStatus} from "../../store/ducks/user/selectors";
import {LoadingState} from "../../store/ducks/user/contracts/state";

interface SingInPopupProps {
    setActivePopupSingIn(boolean: boolean): void
}

export interface LoginFormProps {
    email: string;
    password: string;
}

const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6).required('Длинна пароля не менее 6 символов'),
});

export const SingInPopup: React.FC<SingInPopupProps> = ({setActivePopupSingIn}) => {
    const dispatch = useDispatch();
    const classes = useHomeStyles();
    const loadingStatus = useSelector(selectUserStatus);
    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {});

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    });
    const onSubmit = async (openNotification: (text: string, type: Color) => void, data: LoginFormProps) => {
        dispatch(fetchSignIn(data))
    };

    React.useEffect(() => {
        if(loadingStatus === LoadingState.SUCCESS) {
            openNotificationRef?.current('Авторизация прошла успешно', 'success');
            setActivePopupSingIn(false);
        } else if (loadingStatus === LoadingState.ERROR) {
            openNotificationRef?.current('Неверный логин или пароль', 'error')
        }
    }, [loadingStatus])

    return (
      <Notification>
          {
              callback => {
                  openNotificationRef.current = callback;
                  return (
                    <div className={classes.popupOutside}>
                        <form onSubmit={handleSubmit(onSubmit.bind(this, callback))}>
                            <div className={classes.popup}>
                                <div className={classes.header}>
                                    <CloseIcon className={classes.headerIcon} onClick={() => setActivePopupSingIn(false)}/>
                                    <span className={classes.headerTitle}>Войти в Твиттер</span>
                                </div>
                                <div>
                                    <TextField
                                      {...register("email")}
                                      error={!!errors.email}
                                      helperText={errors.email?.message}
                                      placeholder='Email'
                                      fullWidth
                                      autoFocus
                                    />
                                    <TextField
                                      {...register("password")}
                                      error={!!errors.password}
                                      helperText={errors.password?.message}
                                      placeholder='Password'
                                      style={{marginTop: '20px'}}
                                      fullWidth
                                    />
                                </div>
                                <div>
                                    <Button
                                      disabled={loadingStatus === LoadingState.LOADING}
                                      type="submit"
                                      style={{color: '#fff'}}
                                      variant="contained"
                                      color="primary"
                                      fullWidth
                                    >Войти</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                  )
              }
          }
      </Notification>
    )
}
