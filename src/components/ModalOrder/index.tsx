import { useContext, useEffect, useState } from 'react'

import M from 'materialize-css/dist/js/materialize.min.js'

import Map from '../Map';
import { ComicsContext, ComicsContextType } from '../../contexts/ComicsContext';

export function ModalOrder() {
	
	const [name, setName] = useState('');
	
	const {selectedComics, address, setAddress, clearSelectedComics} = useContext(ComicsContext) as ComicsContextType;
	
	useEffect(() => {
		var elems = document.querySelector('#modal-order');
		M.Modal.init(elems, {opacity: .8});
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
		<div id="modal-order" className="modal">
			<div className="modal-content">
		
				<div className="row">
					<div className="col s12 m4 l4">
						<div className="input-field col s12">
							<h5>Select your address on the map.</h5>
							<div className='map-container'>
								<Map />
							</div> 
						</div>
					</div>
					<div className="col s12 m8 l8">
						<div className="input-field col s12">
							<h5>Please confirm your address and your selected comics.</h5><br/>
							<div className=''>
								<h6>Name: </h6>
								<input 
								placeholder='Your name'
								type="text" 
								value={name}
								onChange={(event) => setName(event.target.value)} />
							</div>
						
							<div className=''>
								<h6>Address:</h6>
								<input 
								type="text" 
								value={address}
								onChange={(event) => setAddress(event.target.value)} />
							</div>
						</div>
						<div className="col s12">
							<h6>Selected Comics: </h6>
							<ul>
								{selectedComics().map((comic, index) => (
									<li key={index}>{comic.title}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			
			<div className="modal-footer">
				<a href="#!" className="rounded modal-close grey white-text waves-effect waves-black btn-flat">Close</a>
				<a href="#!" style={{marginLeft: 10}} onClick={handleConfirmSend} className="modal-close btn white-text waves-ripple">Send</a>
			</div>
		</div>
	)
}