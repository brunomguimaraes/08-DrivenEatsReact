export default function App () {
    return (
        <div>
            <div class="top-bar">
        <h1>DrivenEats</h1>
        <span>Sua comida em 6 minutos</span>
    </div>
    <div class="category">
        <h2>Primeiro, seu prato</h2>
        <div class="options dish">
            <div class="option" onclick="addNewItem(this,'dish')">
                <div>
                    <img src="/media/pratos/strogonoff.jpeg" alt="Strogonoff de Frango" />
                    <h3>Strogonoff de frango</h3>
                    <p class="description">Arroz, strogonoff de frango e batata palha.</p>
                </div>
                <p class="price">R$ 13,90</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'dish')">
                <div>
                    <img src="/media/pratos/parmegiana.jpeg" alt="Frango à Parmegiana" />
                    <h3>Frango à Parmegiana</h3>
                    <p class="description">Arroz, fritas, frango à parmegiana e salada.</p>
                </div>
                <p class="price">R$ 15,40</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'dish')">
                <div>
                    <img src="/media/pratos/milanesa.jpeg" alt="Frango à Milanesa" />
                    <h3>Frango à Milanesa</h3>
                    <p class="description">Arroz, farofa, fritas e frango à milanesa.</p>
                </div>
                <p class="price">R$ 15,90</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'dish')">
                <div>
                    <img src="/media/pratos/grelhado.jpeg" alt="Frango Grelhado" />
                    <h3>Frango Grelhado</h3>
                    <p class="description">Arroz, feijão, farofa e frango grelhado.</p>
                </div>
                <p class="price">R$ 14,90</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'dish')">
                <div>
                    <img src="/media/pratos/liguiça.jpeg" alt="Linguiça de Lombo" />
                    <h3>Linguiça de Lombo Acebolada</h3>
                    <p class="description">Arroz, feijão, farofa, linguiça de lombo acebolada e salada.</p>
                </div>
                <p class="price">R$ 14,40</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'dish')">
                <div>
                    <img src="/media/pratos/peixe.jpeg" alt="Peixe à Milanesa" />
                    <h3>Filé de Peixe à Milanesa</h3>
                    <p class="description">Arroz, fritas, filé de peixe à milanesa e salada.</p>
                </div>
                <p class="price">R$ 19,90</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="dummy"></div>
        </div>
    </div>
    <div class="category">
        <h2>Agora, sua bebida</h2>
        <div class="options drink">
            <div class="option" onclick="addNewItem(this,'drink')">
                <div>
                    <img src="/media/bebidas/coca.jpeg" alt="Coca-Cola" />
                    <h3>Coca-Cola</h3>
                    <p class="description">Lata de 350ml.</p>
                </div>
                <p class="price">R$ 5,00</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'drink')">
                <div>
                    <img src="/media/bebidas/kuat.jpeg" alt="Guaraná Kuat" />
                    <h3>Guaraná Kuat</h3>
                    <p class="description">Lata de 350ml.</p>
                </div>
                <p class="price">R$ 4,00</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'drink')">
                <div>
                    <img src="/media/bebidas/sprite.jpeg" alt="Sprite" />
                    <h3>Sprite</h3>
                    <p class="description">Lata de 350ml.</p>
                </div>
                <p class="price">R$ 4,50</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'drink')">
                <div>
                    <img src="/media/bebidas/mate.jpeg" alt="Chá Gelado Mate" />
                    <h3>Chá Gelado Mate</h3>
                    <p class="description">Garaffa de 450ml sabor limão.</p>
                </div>
                <p class="price">R$ 6,00</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'drink')">
                <div>
                    <img src="/media/bebidas/agua.jpeg" alt="Água Mineral" />
                    <h3>Água Mineral Crystal</h3>
                    <p class="description">Garaffa de 500ml sem gás.</p>
                </div>
                <p class="price">R$ 1,00</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="dummy"></div>
        </div>
    </div>
    <div class="category">
        <h2>Por fim, sua sobremesa</h2>
        <div class="options dessert">
            <div class="option" onclick="addNewItem(this,'dessert')">
                <div>
                    <img src="/media/sobremesas/bombom.jpeg" alt="Bombom de Morango" />
                    <h3>Bombom de Morango</h3>
                    <p class="description">Com brigadeiro cremoso e casquinha de chocolate!</p>
                </div>
                <p class="price">R$ 3,00</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'dessert')">
                <div>
                    <img src="/media/sobremesas/bolo.jpeg" alt="Bolo de Brigadeiro de Caramelo" />
                    <h3>Bolo de Brigadeiro de Caramelo</h3>
                    <p class="description">Nossa receita especial, recheado com Nutella.</p>
                </div>
                <p class="price">R$ 9,00</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'dessert')">
                <div>
                    <img src="/media/sobremesas/brownie.jpeg" alt="Brownie" />
                    <h3>Brownie</h3>
                    <p class="description">Ideal para comer tomando um cafézinho.</p>
                </div>
                <p class="price">R$ 8,00</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'dessert')">
                <div>
                    <img src="/media/sobremesas/cookie.jpeg" alt="Cookie de Chocotone" />
                    <h3>Cookie de Chocotone</h3>
                    <p class="description">Massa de laranja, com gotas de chocolate e recheado com Nutella!</p>
                </div>
                <p class="price">R$ 6,00</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'dessert')">
                <div>
                    <img src="/media/sobremesas/pipoco.jpeg" alt="Pipoco" />
                    <h3>Pipoco</h3>
                    <p class="description">Nosso brigadeiro que estoura na boca! Recheado com leite condensado.</p>
                </div>
                <p class="price">R$ 5,00</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="option" onclick="addNewItem(this,'dessert')">
                <div>
                    <img src="/media/sobremesas/gelatina.jpeg" alt="Gelatina de Morango Recheada" />
                    <h3>Gelatina de Morango Recheada</h3>
                    <p class="description">Nossa famosa gelatina recheada de leite condensado.</p>
                </div>
                <p class="price">R$ 2,50</p>
                <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
            </div>
            <div class="dummy"></div>
        </div>
    </div>
    <div class="bottom-bar">
        <div class="not-ready">
            Selecione os 3 itens para fechar o pedido
        </div>
        <div class="ready hidden" onclick="toggleCheckout()">
            Finalizar Pedido
        </div>
    </div>
    <div class="checkout-window hidden">
        <div class="checkout-box">
            <span class="confirmation-top">Confirme seu pedido</span>
            <div class="items">
                <div class="dish">
                    <span class="dish-name"></span>
                    <span class="dish-price"></span>
                </div>
                <div class="drink">
                    <span class="drink-name"></span>
                    <span class="drink-price"></span>
                </div>
                <div class="dessert">
                    <span class="dessert-name"></span>
                    <span class="dessert-price"></span>
                </div>
                
            </div>
            <div class="total">
                <span>TOTAL</span>
                <span class="total-price"></span>
            </div>
            <div>
                <div class="confirmation" onclick="confirmOrder()">
                    <span>Tudo certo, pode pedir!</span>
                </div>
                <div class="cancel" onclick="toggleCheckout()">
                    <span>Cancelar</span>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}