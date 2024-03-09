import React from 'react';

const ListaItensReceitas = ({dados = [], titulo, tutorial }) => {
	return (
		<>
			<h3 className='text-light display-6'>{titulo}</h3>
			<p className='text-light h5 ' >{tutorial}</p>
			<ol className="list-group list-group-numbered list-group-item-success">
				{dados.map(dadosRecebidos => {
					return (
						<li 
							className="list-group-item" 
							key={dadosRecebidos[0]}>
								{dadosRecebidos}
						</li>
					)
				})}
			</ol>
		</>
	);
};


export default ListaItensReceitas;