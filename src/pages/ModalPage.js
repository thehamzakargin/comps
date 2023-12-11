import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setModal] = useState(false);
    const handleClick = () => {
        setModal(true);
    }
    const handleClose = () => {
        setModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>i accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
    <p>
        here is an important agreement for you accept
    </p>
    </Modal>

    return (
    <div>
    <Button onClick={handleClick} primary>open model</Button>
        {showModal && modal}
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet augue. Praesent nisi ligula, venenatis sit amet auctor vel, blandit sit amet lectus. Phasellus semper accumsan orci id sagittis. Nullam volutpat condimentum dui non varius. Duis mollis, elit id varius viverra, orci diam malesuada lorem, id efficitur sapien velit eu tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales venenatis enim ac congue. Curabitur dapibus nulla ultrices sodales commodo. Ut quis lobortis nisl, sit amet condimentum nulla. Aenean nec dolor ac nulla tristique venenatis nec eu tortor. In ac finibus mi. Fusce pretium vestibulum lorem sed pharetra. Morbi volutpat nulla nulla, eget ultricies ipsum malesuada a.
        </p>
    </div>
    );
}

export default ModalPage;