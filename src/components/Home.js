import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="main-container">
        <div className="flex-container">
            <div className="flex-child">
                <Button label="Savings">

                </Button>
                <Button label="Necessities">
                    
                </Button>
                <Button label="Discretionary">
                    
                </Button>
                <div className="showmore">
                    <h2>Show More</h2>
                </div>
            </div>
            <div className="flex-child">
                hi1
            </div>
        </div>
    </div>
  )
}

function CategoryBox(props) {
    return (
        <div className="categorybox">
            <h2>{props.label}</h2>
        </div>
    );
}

export default Home