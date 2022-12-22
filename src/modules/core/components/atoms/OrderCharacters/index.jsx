import './styles.scss';
export default function OrderCharacter() {
  return (
    <div>
      <div>
        <h3>Ordenar por</h3>
      </div>
      <div>
        <select className="Arizona" id="lang">
          <option value="A-Z" tabIndex="0" className="Option-order-active">
            A-Z
          </option>
          <option value="Z-A" tabIndex="0" className="Option-order">
            Z-A
          </option>
        </select>
      </div>
    </div>
  );
}
