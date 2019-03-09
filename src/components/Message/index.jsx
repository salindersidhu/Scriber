import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

class Message extends Component {
    render() {
        const {
            text,
            title,
            color,
            state,
            toggle,
            className,
            backdrop
        } = this.props;
        return (
            <Modal
                isOpen={state}
                toggle={toggle}
                className={'modal-' + color + ' ' + className}
                backdrop={backdrop}
            >
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>{text}</ModalBody>
                <ModalFooter>
                    <Button color={color} onClick={toggle}>OK</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

Message.defaultProps = {
    backdrop: true,
    className: 'mr-1'
};

Message.propTypes = {
    /**
     * Message modal body text.
     */
    text: PropTypes.string,
    /**
     * Message modal title.
     */
    title: PropTypes.string,
    /**
     * Message modal color.
     */
    color: PropTypes.string,
    /**
     * Message modal state.
     */
    state: PropTypes.bool,
    /**
     * Message modal toggle function.
     */
    toggle: PropTypes.func,
    /**
     * Message modal classname.
     */
    className: PropTypes.string,
    /**
     * Message modal backdrop control.
     */
    backdrop: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ])
};

export default Message;
