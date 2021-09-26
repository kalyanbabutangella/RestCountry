import React from "react";
import { connect } from "react-redux";
import { loadRegions } from "../middleware";
import { Row, Col, Button, Spin } from "antd";

const Getregion = (props) => {
  const { regions, load_regions } = props;

  if (!!Object.keys(regions.data).length) {
    console.log(regions, regions.data.borders);
  }
  const handlegetRegion = () => {
    load_regions();
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>
        {!!Object.keys(regions.data).length ? (
          <>Please Press Below Button to get a New Region</>
        ) : (
          <>Please Press Below Button to Load a Region</>
        )}
      </h2>
      <div>
        <Button type="primary" danger onClick={handlegetRegion}>
          {!!Object.keys(regions.data).length ? (
            <>Refresh Region!!</>
          ) : (
            <>Get a Region!!</>
          )}
        </Button>
        {!!Object.keys(regions.data).length && !regions.isLoading ? (
          <div>
            <div>
              <img
                src={regions.data.flags[1]}
                alt="Flag_Image"
                height="400"
                width="300"
                style={{
                  margin: "20px 10px 10px 10px"
                }}
              />
            </div>
            <div style={{ fontSize: "1.2rem" }}>
              <Row>
                <Col xs={24} sm={12}>
                  Name : {regions.data.name.common}
                </Col>
                <Col xs={24} sm={12}>
                  Capital : {regions.data.capital[0]}
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={12}>
                  Region : {regions.data.region}
                </Col>
                <Col xs={24} sm={12}>
                  Sub Region : {regions.data.subregion}
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={12}>
                  {regions.data.hasOwnProperty("languages") ? (
                    <>
                      Languages :
                      {Object.values(regions.data.languages).join(",")}
                    </>
                  ) : (
                    <></>
                  )}
                </Col>
                <Col xs={24} sm={12}>
                  {regions.data.hasOwnProperty("borders") ? (
                    <>
                      Borders : {Object.values(regions.data.borders).join(",")}
                    </>
                  ) : (
                    <></>
                  )}
                </Col>
              </Row>
            </div>
          </div>
        ) : (
          <div>
            {regions.isLoading ? (
              <div className="loader">
                <Spin tip="Loading..." size="large"></Spin>
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  regions: state.getRegions.get_region
});

const mapDispatchToProps = {
  load_regions: loadRegions
};

export default connect(mapStateToProps, mapDispatchToProps)(Getregion);
