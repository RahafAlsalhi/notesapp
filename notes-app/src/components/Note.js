import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text,title, date, handleDeleteNote }) => {
	return (
		<div className='note'>
		<h2><span>{title}</span></h2>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;