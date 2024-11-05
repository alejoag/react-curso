// src/components/CartWidget.jsx
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
    const cartItemCount = 0;

    return (
        <div style={{ position: 'relative' }}>
            <FaShoppingCart size={40} />
            <Badge bg="danger" pill style={{ position: 'absolute', top: '1px', right: '1px' }}>
                {cartItemCount}
            </Badge>
        </div>
    );
};

export default CartWidget;

