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
import {fetchSignUp} from "../../store/ducks/user/actionCreators";
import {selectUserStatus} from "../../store/ducks/user/selectors";
import {LoadingState} from "../../store/ducks/user/contracts/state";

export interface RegPopupProps {
    fullName: string,
    username: string,
    email: string,
    password: string,
    password2: string,
    setActivePopupReg?(boolean: boolean): void
}

const RegisterFormSchema = yup.object().shape({
    fullName: yup.string().required('Введите полное имя'),
    email: yup.string().email('Неверная почта').required('Введите почту'),
    username: yup.string().required('Введите логин'),
    password: yup.string().min(6).required('Минимальная длинна пароля 6 символов'),
    password2: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают')
})

export const RegPopup = ({ setActivePopupReg }: any) => {
    const dispatch = useDispatch();
    const classes = useHomeStyles();
    const loadingStatus = useSelector(selectUserStatus);
    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {});

    const { register, handleSubmit, formState: { errors } } = useForm<RegPopupProps>({
        resolver: yupResolver(RegisterFormSchema)
    });
    const onSubmit = async (openNotification: (text: string, type: Color) => void, data: RegPopupProps) => {
        dispatch(fetchSignUp(data))
    };

    React.useEffect(() => {
        if(loadingStatus === LoadingState.SUCCESS) {
            openNotificationRef?.current('Регистрация прошла успешно', 'success');
            setActivePopupReg(false);
        } else if (loadingStatus === LoadingState.ERROR) {
            openNotificationRef?.current('Произошла ошибка при регистрации', 'error')
        }
    }, [setActivePopupReg, loadingStatus])

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
                                    <CloseIcon className={classes.headerIcon} onClick={() => setActivePopupReg(false)}/>
                                    <span className={classes.headerTitle}>Войти в Твиттер</span>
                                </div>
                                <div>
                                    <TextField
                                      {...register("fullName")}
                                      error={!!errors.fullName}
                                      helperText={errors.fullName?.message}
                                      placeholder='Полное имя'
                                      fullWidth
                                      autoFocus
                                    />
                                    <TextField
                                      {...register("username")}
                                      error={!!errors.username}
                                      helperText={errors.username?.message}
                                      placeholder='Логин'
                                      fullWidth
                                      autoFocus
                                    />
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
                                      type='password'
                                      placeholder='Пароль'
                                      fullWidth
                                    />
                                    <TextField
                                      {...register("password2")}
                                      error={!!errors.password2}
                                      helperText={errors.password2?.message}
                                      type='password'
                                      placeholder='Повторите пароль'
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
                                    >Регистрация</Button>
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
