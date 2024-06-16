import { useState } from 'react';
import Modal from '../../components/Modals/Modal';
import styles from './Home.module.scss';

const Home = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className={styles.home}>
			<button onClick={() => setOpen(true)}>Open button</button>

			{open && <Modal open={open} setOpen={setOpen} />}
		</div>
	);
};

export default Home;
