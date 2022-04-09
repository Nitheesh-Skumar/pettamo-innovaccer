import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Toast=()=> <ToastContainer position="top-right"
autoClose={2500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
export default Toast

export const toaster = toast

export const toastSuccess =(id,msg)=> toast.update(id, {
  render: msg,
  type: toast.TYPE.SUCCESS,
  autoClose: 2500,
  isLoading: false
});

export const toastError =(id,msg)=> toast.update(id, {
  render: msg,
  type: toast.TYPE.ERROR,
  autoClose: 2500,
  isLoading: false
});