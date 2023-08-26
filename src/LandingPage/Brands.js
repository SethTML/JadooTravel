import AxonGO from '../Images/AxonGO.png';
import JetstarGO from '../Images/JetstarGO.png';
import ExpediaGO from '../Images/ExpediaGO.png';
import QantasGO from '../Images/QantasGO.png';
import AlitaliaGO from '../Images/AlitaliaGO.png';

function Brands() {
  return (
    <div className = "Brands reveal">
      <div className = "BrandsContent">
        <img src= {AxonGO} className = 'BrandImage' />
        <img src= {JetstarGO} className = 'BrandImage' />
        <img src= {ExpediaGO} className = 'BrandImage' />
        <img src= {QantasGO} className = 'BrandImage' />
        <img src= {AlitaliaGO} className = 'BrandImage' />
      </div>
    </div>
  );
}

export default Brands;
