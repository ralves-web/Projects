import React, { useEffect, useState } from 'react'
import Formulario from './Formulario'
import fireDb from './firebase'



const Register = () => {


    let [dadosprodutos, setDadosprodutos] = useState({})

    let [idAtual, setidAtual] = useState('')

    useEffect( () => {

        fireDb.child('itens').on('value', dbPhoto => {
            if(dbPhoto.val() != null) {
                setDadosprodutos({
                    ...dbPhoto.val()
                })

            }else {
                setDadosprodutos({})
            }

        })
    }, [])




    const addEedit = obj => {

        if(idAtual == ''){

            console.log(obj)
            fireDb.child('itens').push(
                obj,
                error => {
                    if(error){
                        console.log(error)
                    } else {
                        setidAtual('')
                    }
                }
                
            )
    
        } else {
            fireDb.child(`itens/${idAtual}`).set(
                obj,
                err => {
                    if(err){
                        console.log(err)
                    }
                }
            )
        }

    }

    const deletProduct = key => {
        if(window.confirm('Deseja realmente deletar este item ?')) {
        fireDb.child(`itens/${key}`).remove(
            err => {
                if(err)
                    console.log(err)
                }
            )
        }        
    }


    return (


        <div className="bg-light">
    
            
            <div className="col-md-12 p-4">
            
                <div className="container col-md-10 pt-3 pb-3 bg-dark text-center text-white rounded">
                    <h2>Products Crud</h2>
                </div>

            <div className="col-md-6 m-auto mt-3">
            <div className="input-group rounded">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
        <button type="button" className="btn btn-outline-primary">search</button>
            </div>

            </div>

                <div className="col-md-5 offset-md-2 mt-4 m-auto">
                    <Formulario {...({addEedit, idAtual, dadosprodutos})}/>
                </div>

                <div className="row mt-5 ml-2">
                   
                    {     

                        Object.keys(dadosprodutos).map(id =>{
                            return <div className="col-3" key={id}>
                                <div>
                                    <div className="card ">                    
                                        <div className="card-body">
                                            <img  src="/images/Tenis.png" alt="50" width="70%"
                                            className="text-center"/>
                                            <h5 className="card-title text-center text-uppercase">
                                            <p>{dadosprodutos[id].nomeProduto}</p>
                                            </h5>
                                            <div className="card-text">

                                            <div className="text-center p-2">
                                            <button type="button" className="btn btn-success text-center">{dadosprodutos[id].quantidadeProduto} Peças</button>
                                            </div>
                                           
                                            <div className="text-center p-2">
                                            <button type="button" className="btn btn-info text-center ">{dadosprodutos[id].precoProduto}<small>,00 R$</small></button>
                                            </div>

                                            
                                         <div>   
                                            <a className="btn btn-lg btn-primary m-2" onClick={ () =>{setidAtual(id)} }>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>

                                            <a className="btn btn-lg btn-primary m-2" onClick={ () =>{deletProduct(id)} }>
                                                <i className="far fa-trash-alt" ></i>
                                            </a>

                                         </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        })
                        
                    }     

                </div>                  


              





        


            </div>




</div>

    )

    

}


export default Register;