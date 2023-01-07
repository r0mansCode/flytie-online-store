import "./Contacts.css";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Map } from "../../components/map/Map";

export const Contacts = () => {
  return (
    <div className="contactsContainer">
      <div className="contactsSubContainer">
        <div>
          <AiOutlineMail />
          &nbsp;E-pasts: flytie.bartender@gmail.com
        </div>
        <div>
          <AiOutlinePhone />
          &nbsp;Tālrunis: +371 26774951
        </div>
        <div>
          <AiOutlinePhone />
          &nbsp; Otrais Tālrunis: +371 27171618
        </div>
        <div>
          <GoLocation />
          &nbsp; Adrese: Zemitānu iela 9
        </div>
        <div>
          <AiOutlineClockCircle />
          &nbsp; Pirmdiena-Piektdiena: 10:00 - 18:00
        </div>
        <div>
          <AiOutlineClockCircle />
          &nbsp; Sestdiena: 12:00 - 17:00
        </div>
        <br />
        <strong>Mūsu rekvizīti:</strong>
        SIA FLYTIE <br />
        Reģ. numurs 40203412845 <br />
        Juridiskā adrese: Rīga, Zemitāna iela 9, LV-1012 <br />
        Tel. +37127171618 <br />
        Konta nr.: LV82HABA0551053101094 Banka: AS “Swedbanka” <br />
        Bankas Kods: HABALV22
      </div>
      <div id="map" className="mapContainer">
        <Map />
      </div>
    </div>
  );
};
