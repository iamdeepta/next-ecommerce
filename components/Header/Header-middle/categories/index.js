import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Container,
  Row,
  Col,
} from "reactstrap";
import React from "react";
import Link from "next/link";

const MbCategories = () => {
  const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");
  return (
    <div className="categories-wrap">
      <ul className="mb-categories-list">
        <li className="mb-categories-item">
          <Card>
            <CardHeader
              id="headingOnee"
              aria-expanded={openedCollapse === "collapseOnee"}
            >
              <h5 className=" mb-0">
                <Button
                  onClick={() =>
                    setOpenedCollapse(
                      openedCollapse === "collapseOnee" ? "" : "collapseOnee"
                    )
                  }
                  className="mb-categories-link"
                  color="link"
                >
                  Men Clothing{" "}
                  <span>
                    <i className="icon-right"></i>
                  </span>
                </Button>
              </h5>
            </CardHeader>
            <Collapse
              isOpen={openedCollapse === "collapseOnee"}
              aria-labelledby="headingOnee"
              data-parent="#accordionExample"
              id="collapseOnee"
            >
              <CardBody className=" opacity-8">
                <ul class="Sub-Cat">
                  <li>
                    <Link href="#">
                      <a>Shirts</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Women Clothing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Consumer Eletronics</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Shirts Consumer Eletronics</a>
                    </Link>
                  </li>
                </ul>
              </CardBody>
            </Collapse>
          </Card>
        </li>
        <li className="mb-categories-item">
          <Card>
            <CardHeader
              id="headingTwo"
              aria-expanded={openedCollapse === "collapseTwo"}
            >
              <h5 className=" mb-0">
                <Button
                  onClick={() =>
                    setOpenedCollapse(
                      openedCollapse === "collapseTwo" ? "" : "collapseTwo"
                    )
                  }
                  className="mb-categories-link"
                  color="link"
                >
                  Women Clothing{" "}
                  <span>
                    <i className="icon-right"></i>
                  </span>
                </Button>
              </h5>
            </CardHeader>
            <Collapse
              isOpen={openedCollapse === "collapseTwo"}
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
              id="collapseTwo"
            >
              <CardBody className=" opacity-8">
                <ul class="Sub-Cat">
                  <li>
                    <Link href="#">
                      <a>Shirts</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Women Clothing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Consumer Eletronics</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Shirts Consumer Eletronics</a>
                    </Link>
                  </li>
                </ul>
              </CardBody>
            </Collapse>
          </Card>
        </li>
        <li className="mb-categories-item">
          <Link href="/cart">
            <a className="mb-categories-link">
              Computer & office{" "}
              <button>
                <i className="icon-right"></i>
              </button>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default MbCategories;
