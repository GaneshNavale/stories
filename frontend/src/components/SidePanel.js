import Button from "react-bootstrap/Button";

const SidePanel = () => {
  return (
    <>
      <div className="side-pannel">
        <Button variant="outline-primary">Moto GP</Button>{" "}
        <Button variant="outline-secondary">Data Science</Button>{" "}
        <Button variant="outline-success">Racing</Button>{" "}
        <Button variant="outline-warning">Bikes</Button>{" "}
        <Button variant="outline-danger">Jobs</Button>{" "}
        <Button variant="outline-info">MCA</Button>{" "}
        <Button variant="outline-success">ZX-10-R</Button>{" "}
        <Button variant="outline-dark">Cricket</Button>
        <div class="sticky-sm-top">
          Stick to the top on viewports sized SM (small) or wider
        </div>
        <div class="sticky-md-top">
          Stick to the top on viewports sized MD (medium) or wider
        </div>
        <div class="sticky-lg-top">
          Stick to the top on viewports sized LG (large) or wider
        </div>
        <div class="sticky-xl-top">
          Stick to the top on viewports sized XL (extra-large) or wider
        </div>
        <div class="sticky-xxl-top">
          Stick to the top on viewports sized XXL (extra-extra-large) or wider
        </div>
      </div>
    </>
  );
};

export default SidePanel;
