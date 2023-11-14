import Swal from 'sweetalert2';

const showDialog = async (
  title,
  text,
  icon,
  confirmButtonColor,
  confirmButtonText,
  cancelButtonText
) => {
  const result = await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: confirmButtonColor || '#3a78f2',
    cancelButtonColor: '#0009',
    confirmButtonText,
    cancelButtonText,
    background: 'var(--background-color)',
    color: 'var(--text-color)',
    timer: 5000,
    timerProgressBar: true,
  });

  return result.isConfirmed;
};

export default showDialog;
