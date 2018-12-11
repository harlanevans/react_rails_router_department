import React from 'react';

class Item extends React.Component {

    state = {
        item: []
    }

    render() {
        let { title, description, price } = this.props;
        return (
            <>
                    <h1>
                    {title}
                    </h1>
                    <h3>
                      {description}
                      {price}
                    </h3>

            </>
        )
    }

}

export default Item;