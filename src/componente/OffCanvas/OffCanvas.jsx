import React, { useContext } from 'react';
import { ReceitaContext } from '../../context/ReceitaContext';

const OffCanvas = ({ }) => {
	const {receita} = useContext(ReceitaContext)
	console.log(receita);
	return (
		<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
			<div className="offcanvas-header">
				<h5 className="offcanvas-title" id="offcanvasRightLabel">{receita.nome}</h5>
				<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div className="offcanvas-body">
				<p>{receita.tutorial}</p>
			</div>
		</div>
	);
};


export default OffCanvas;