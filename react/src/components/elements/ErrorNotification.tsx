import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../state/store';
import { setErrorNotification } from '../../state/notification/errorNotificationSlice';



export default function ErrorNotification() {

    const message = useSelector((state: RootState) => state.errorNotification.message)
    const dispatch = useDispatch()

    const notify = () => {
        toast.error(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    useEffect(() => {

        if (message) {
            notify()
        }
        dispatch(setErrorNotification(""))

    }, [message])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}
