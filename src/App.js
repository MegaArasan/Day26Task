import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Msg />
      <Msg1 />
      <Msg2 />
    </div>
  );
}
// first free box
function Msg() {
  return (
    <div className="card-content">
      <div class="card-head">
        <h5 className="text-muted">
          <center>FREE</center>
        </h5>
        <h6>
          <center>
            $0<span className="period">/month</span>
          </center>
        </h6>
      </div>
      <div className="card-body">
        <ul>
          <li>
            <i class="fas fa-check"></i> Single User
          </li>
          <li>
            <i class="fas fa-check"></i> 5GB Storage
          </li>
          <li>
            <i class="fas fa-check"></i> Unlimited Public Projects
          </li>
          <li>
            <i class="fas fa-check"></i> Community Access
          </li>
          <li className="text-muted">
            <i class="fas fa-times"></i> Unlimited Private Projects
          </li>
          <li className="text-muted">
            <i class="fas fa-times"></i> Dedicated Phone Support
          </li>
          <li className="text-muted">
            <i class="fas fa-times"></i> Free Subdomain
          </li>
          <li className="text-muted">
            <i class="fas fa-times"></i> Monthly Status Reports
          </li>
        </ul>
      </div>
      <div className="buy">
        {/* eslint-disable-next-line */}
        <a href="#" className="btn btn-primary">
          BUTTON
        </a>
      </div>
    </div>
  );
}
// second plus box
function Msg1() {
  return (
    <div className="card-content">
      <div class="card-head">
        <h5 className="text-muted">
          <center>PLUS</center>
        </h5>
        <h6>
          <center>
            $9<span className="period">/month</span>
          </center>
        </h6>
      </div>
      <div className="card-body">
        <ul>
          <li>
            <i class="fas fa-check"></i> <b>5 Users</b>
          </li>
          <li>
            <i class="fas fa-check"></i> 50GB Storage
          </li>
          <li>
            <i class="fas fa-check"></i> Unlimited Public Projects
          </li>
          <li>
            <i class="fas fa-check"></i> Community Access
          </li>
          <li>
            <i class="fas fa-check"></i> Unlimited Private Projects
          </li>
          <li>
            <i class="fas fa-check"></i> Dedicated Phone Support
          </li>
          <li>
            <i class="fas fa-check"></i> Free Subdomain
          </li>
          <li className="text-muted">
            <i class="fas fa-times"></i> Monthly Status Reports
          </li>
        </ul>
      </div>
      <div className="buy">
        {/* eslint-disable-next-line */}
        <a href="#" className="btn btn-primary">
          BUTTON
        </a>
      </div>
    </div>
  );
}
// third pro box
function Msg2() {
  return (
    <div className="card-content">
      <div class="card-head">
        <h5 className="text-muted">
          <center>PRO</center>
        </h5>
        <h6>
          <center>
            $49<span className="period">/month</span>
          </center>
        </h6>
      </div>
      <div className="card-body">
        <ul>
          <li>
            <i class="fas fa-check"></i> <b>Unlimited Users</b>
          </li>
          <li>
            <i class="fas fa-check"></i> 150GB Storage
          </li>
          <li>
            <i class="fas fa-check"></i> Unlimited Public Projects
          </li>
          <li>
            <i class="fas fa-check"></i> Community Access
          </li>
          <li>
            <i class="fas fa-check"></i> Unlimited Private Projects
          </li>
          <li>
            <i class="fas fa-check"></i> Dedicated Phone Support
          </li>
          <li>
            <i class="fas fa-check"></i>
            <b>Unlimited</b> Free Subdomain
          </li>
          <li>
            <i class="fas fa-check"></i> Monthly Status Reports
          </li>
        </ul>
      </div>
      <div className="buy">
        {/* eslint-disable-next-line */}
        <a href="#" className="btn btn-primary">
          BUTTON
        </a>
      </div>
    </div>
  );
}
