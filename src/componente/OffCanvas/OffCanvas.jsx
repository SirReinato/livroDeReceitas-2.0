import React, { useContext } from 'react';
import ListaItensReceitas from './ListaItensReceitas/ListaItensReceitas';
import { DetalheReceitaContext } from '../../context/DetalheReceitaContext';

const OffCanvas = ({ }) => {
	const { receita } = useContext(DetalheReceitaContext)

	const ingredientes = receita.Ingredientes;
	const tutorial = receita.tutorial;
	return (
		<div
			className="offcanvas offcanvas-end bg-success"
			tabIndex="-1" id="offcanvasRight"
			aria-labelledby="offcanvasRightLabel">

			<div className="offcanvas-header">
				<h2
					className="offcanvas-title text-light display-5"
					id="offcanvasRightLabel">
					{receita.nome}
				</h2>

				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"></button>
			</div>
			<div className="offcanvas-body">
				<ListaItensReceitas dados={ingredientes} titulo={'Ingredientes'}/>
				<ListaItensReceitas tutorial={tutorial} titulo={'Como Fazer'}/>
			</div>
		</div>
	);
};


export default OffCanvas;