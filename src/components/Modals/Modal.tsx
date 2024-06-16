import {
	Dispatch,
	FC,
	MouseEvent,
	SetStateAction,
	useRef,
	useState,
} from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ open, setOpen }) => {
	const [isHideAnimation, setIsHideAnimation] = useState<boolean>(false);
	const modalRef = useRef<HTMLDivElement | null>(null);

	const close = () => {
		setIsHideAnimation(true);
		setTimeout(() => {
			setOpen(false);
		}, 70);
	};
	const closeModal = (
		e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>,
	) => {
		if (!modalRef.current) return;

		if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
			close();
		}
	};

	return (
		<div className={styles.modalWrapper} onClick={closeModal}>
			<div
				ref={modalRef}
				className={`${styles.modal} ${
					open && !isHideAnimation ? styles.show : styles.hide
				}`}>
				<div className={styles.title}>
					<div className={styles.titleBg}>
						<img src='/assets/modal/modal-title.svg' alt='bg' />
					</div>
					<span>Список друзей</span>
					<button className={styles.buttonClose} onClick={close}></button>
				</div>
				<div className={styles.content}>
					<div className={styles.main}></div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
