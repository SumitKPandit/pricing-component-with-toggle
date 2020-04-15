import React, {Component} from "react";
import styles from "./layout.module.scss";
import Toggle from "../../components/toggle/Toggle";
import Card from "../../components/card/Card";

class Layout extends Component {
    state = {
        monthly: false,
        plans: [
            {
                name: "Basic",
                monthlyFee: 19.99,
                yearlyFee: 199.99,
                storage: "500 GB",
                users: 2,
                bandwidth: 3
            },
            {
                name: "Professional",
                monthlyFee: 24.99,
                yearlyFee: 249.99,
                storage: "1 TB",
                users: 5,
                bandwidth: 10
            },
            {
                name: "Master",
                monthlyFee: 39.99,
                yearlyFee: 399.99,
                storage: "2 TB",
                users: 10,
                bandwidth: 20
            }
        ]
    }

    togglePriceHandler = () => {
        this.setState(prevState => ({
            monthly: !prevState.monthly
        }));
    }

    render() {
        return (
            <div className={styles.layout}>
                <h1>Our Pricing</h1>
                <div className={styles.control}>
                    <p>Annually</p>
                    <Toggle changePrice={this.togglePriceHandler} status={this.state.monthly} />
                    <p>Monthly</p>
                </div>
                <div className={styles.cards}>
                    {this.state.plans.map((plan, index) => (
                        <Card 
                            key={index}
                            status={index === 1 ? "active" : "inactive"}
                            name={plan.name}
                            fee={this.state.monthly ? plan.monthlyFee : plan.yearlyFee}
                            storage={plan.storage}
                            users={plan.users}
                            bandwidth={plan.bandwidth}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Layout;