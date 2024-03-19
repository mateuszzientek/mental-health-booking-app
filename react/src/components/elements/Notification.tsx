import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../state/store';
import { setMessage } from '../../state/notification/notificationSlice';


export default function Notification() {

    const message = useSelector((state: RootState) => state.notification.message)
    const dispatch = useDispatch()

    const notify = () => {
        toast.success(message, {
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
        dispatch(setMessage(""))

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
