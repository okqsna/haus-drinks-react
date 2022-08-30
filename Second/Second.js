import './Second.css'

function Second(){
    return (
         <div className="page2__wrapp">
             <div className="txt__page2">
             <h2>Made with natural <br></br>
             ingredients, nothing fake</h2>
             <p>shop all flavors</p>
            </div>
             <div className="products__row">
                 <div className="product1__row">
                     <div className="img__product1"></div>
                     <div className="info__product1">
                         <div className="txt__product1">
                             <h4>The Sampler Kit</h4>
                             <p>Try a variety of Haus flavors with our customizable <br></br>
                                 four-bottle kit. Each bottle serves 2-3 drinks.</p>
                         </div>
                         <a href="/#">shop now</a>
                     </div>
                 </div>
                 <div className="product2__row">
                     <div className="img__product2"></div>
                     <div className="info__product2">
                         <div className="txt__product2">
                             <h4>Grapefruit Jalapeño</h4>
                             <p>Light and refreshing, this aperitif is a bright blend of <br></br>
                                 citrus with a subtle kick of fresh jalapeño.</p>
                         </div>
                         <a href="/#">shop now</a>
                     </div>
                 </div>
                 <div className="product3__row">
                     <div className="img__product3"></div>
                     <div className="info__product3">
                         <div className="txt__product3">
                             <h4>Citrus Flower</h4>
                             <p>A fresh Californian take on the apéritif. Made with <br></br>
                                  crisp lemon and subtle elderflower.</p>
                         </div>
                         <a href="/#">shop now</a>
                     </div>
                 </div>
             </div>
        
             
        </div>    
        
        
        
    )
}
export default Second;