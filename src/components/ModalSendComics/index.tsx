import { useContext, useEffect, useState } from 'react'
import { ComicsContext, ComicsContextType } from '../../contexts/ComicsContext'

import M from 'materialize-css/dist/js/materialize.min.js'


export function ModalSendComics() {

	const {address, setAddress, selectedComics, clearSelectedComics} = useContext(ComicsContext) as ComicsContextType;
	const [name, setName] = useState('');

	useEffect(() => {
		//var elems = document.querySelector('#modal-send-comics');
		//M.Modal.init(elems);
	}, []);

	function handleConfirmSend(){
		if(name.length < 2){
			M.toast({html: 'Please enter a valid name.'})
		}else {
			console.log('Sending:', selectedComics(), 'to: ', name);

			setAddress('');
			clearSelectedComics();
		}
	}
  	
  	return (
		<div id="modal-send-comics" className="modal">
			<div className="modal-content">
				<h4>Confirmation Step:</h4>
				<div className="input-field col s12">
					<h5>Please confirm your address and your selected comics.</h5>
					<div className='col'>
						<h6>Name: </h6>
						<input 
							placeholder='Your name'
							type="text" 
							value={name}
							onChange={(event) => setName(event.target.value)} />
					</div>
					
					<div className='col'>
						<h6>Address:</h6>
						<input 
							type="text" 
							value={address}
							onChange={(event) => setAddress(event.target.value)} />
					</div>
				</div>
				<div className="input-field col s12">
					<ul>
						{selectedComics().map((comic, index) => (
							<li key={index}>{comic.title}</li>
						))}
					</ul>
				</div>
			</div>  
				<div className="modal-footer">
				<a href="#!" className="modal-close waves-effect waves-black btn-flat">Close</a>
				<a href="#!" className="modal-close waves-effect waves-green btn-flat green-text"
					onClick={handleConfirmSend}>Confirm</a>
			</div>
		</div>
  	)
}
