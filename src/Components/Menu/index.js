import React, { Component } from "react"
import MenuComponent from "./MenuComponent"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0,
            fries: 0,
            Hamburger: 0,
            Pepsi: 0,
            Coke: 0,
            Sandwich: 0,
            Pizza: 0,
            friesPrice: 0,
            HamburgerPrice:0,
            PepsiPrice:0,
            CokeC:0,
            SandwichPrice:0,
            PizzaPrice:0,
            finalAmount:0,
            AddtoCart:0,
        };
    }
    Priceplus = (e) => {
        console.log(e)
        if (e === "Fries") {
            if(this.state.fries === 0)  
            this.setState({ cartCount:this.state.cartCount+1 }) 
            this.setState({ fries: this.state.fries + 1 });
            this.setState({ friesPrice: this.state.friesPrice + 100 })
            
        }
        if (e === "Pepsi") {
            if(this.state.Pepsi === 0)  this.setState({ cartCount:this.state.cartCount+1 })
            this.setState({ Pepsi: this.state.Pepsi + 1 });
            this.setState({ PepsiPrice: this.state.PepsiPrice + 50 })
        }
        if (e === "Coke") {
            if(this.state.Coke === 0)  this.setState({ cartCount:this.state.cartCount+1 })
            this.setState({ Coke: this.state.Coke + 1 });
            this.setState({ CokePrice: this.state.CokePrice + 50 }) 
        }
        if (e === "Hamburger") {
            if(this.state.Hamburger === 0)  this.setState({ cartCount:this.state.cartCount+1 })
            this.setState({ Hamburger: this.state.Hamburger + 1 });
            this.setState({ HamburgerPrice: this.state.HamburgerPrice + 200 })
        }
        if (e === "Sandwich") {
            if(this.state.Sandwich === 0)  this.setState({ cartCount:this.state.cartCount+1 })
            this.setState({ Sandwich: this.state.Sandwich + 1 });
            this.setState({ SandwichPrice: this.state.SandwichPrice + 80 })
        }
    if (e === "Pizza") {
        if(this.state.Pizza === 0)  this.setState({ cartCount:this.state.cartCount+1 })
        this.setState({ Pizza: this.state.Pizza + 1 });
        this.setState({ PizzaPrice: this.state.PizzaPrice + 160 })
    }

        this.setState()
        //this.cartChange()
    }


    Priceminus = (e) => {
        if (e === "Fries" && this.state.fries > 0 ) {
            if(this.state.fries === 1)  this.setState({ cartCount:this.state.cartCount-1 }) 
            this.setState({ fries: this.state.fries - 1 });
            this.setState({ friesPrice: this.state.friesPrice - 100 })
        }
        if (e === "Pepsi" && this.state.Pepsi > 0) {
            if(this.state.Pepsi === 1)  this.setState({ cartCount:this.state.cartCount-1 })
            this.setState({ Pepsi: this.state.Pepsi - 1 });
            this.setState({ PepsiPrice: this.state.PepsiPrice - 50 })
        }
        if (e === "Coke"  && this.state.Coke > 0) {
            if(this.state.Coke === 1)  this.setState({ cartCount:this.state.cartCount-1 })
            this.setState({ Coke: this.state.Coke - 1 });
            this.setState({ CokePrice: this.state.CokePrice - 50 }) 
        }
        if (e === "Hamburger"  && this.state.Hamburger > 0) {
            if(this.state.Hamburger === 1)  this.setState({ cartCount:this.state.cartCount-1 })
            this.setState({ Hamburger: this.state.Hamburger - 1 });
            this.setState({ HamburgerPrice: this.state.HamburgerPrice - 200 })
        }
        if (e === "Sandwich"  && this.state.Sandwich > 0) {
            if(this.state.Sandwich === 1)  this.setState({ cartCount:this.state.cartCount-1 })
            this.setState({ Sandwich: this.state.Sandwich - 1 });
           this.setState({ SandwichPrice: this.state.SandwichPrice - 80 })
        }
        if (e === "Pizza"  && this.state.Pizza > 0) {
            if(this.state.Pizza === 1)  this.setState({ cartCount:this.state.cartCount-1 })
            this.setState({ Pizza: this.state.Pizza - 1 });
            this.setState({ PizzaPrice: this.state.PizzaPrice - 160 })
        }
        this.setState({finalAmount:this.state.HamburgerPrice+this.state.PepsiPrice+this.state.friesPrice+this.state.CokePrice+this.state.SandwichPrice+this.state.PizzaPrice})

    }
    AddtoCart = (e) => {
        console.log(e)
        if (e === "Hamburger") {
            if(this.state.Hamburger === 0)  
            this.setState({ cartCount:this.state.cartCount+1 })
            this.setState({ Hamburger: this.state.Hamburger + 1 });
            this.setState({ HamburgerPrice: this.state.HamburgerPrice + 100 })
             
            
        }     

    }
    render() {

        return (
            <MenuComponent refreshCart={this.cartChange} Priceplus={this.Priceplus} Priceminus={this.Priceminus} state={this.state} AddtoCart={this.cartCount} />
        )
    }
}
export default Menu;