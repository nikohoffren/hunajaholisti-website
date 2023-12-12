import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Modal from "./Modal";

function CookieConsent() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (!cookieConsent) {
      setShowModal(true);
    }
  }, []);

  const handleConsent = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setShowModal(false);
  };

  const handleReject = () => {
    Cookies.set("cookieConsent", "false", { expires: 365 });
    setShowModal(false);
  };

  return showModal ? (
    <Modal onAccept={handleConsent} onReject={handleReject} />
  ) : null;
}

export default CookieConsent;
