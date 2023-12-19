interface NavlinkProps {
    nav:string[]
}
const Navlink:React.FC<NavlinkProps>= ({nav})=> (
    <ul className="go-somewhere">
          {nav.map((place) => {
            return (
              <li key={place}>
                <a>{place}</a>
              </li>
            );
          })}
        </ul>

);

export default Navlink;