import React from 'react'
import { Row, Col } from "react-bootstrap"

export default function Bottom_Banner() {
    return (
        <div className="mt-3 overflow-hidden">
            <Row>
                <Col lg={12} xs={12} md={12}>
                    <img style={{ height: "75vh", width: "100%" }} src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?pid=ImgDet&rs=1" />
                </Col>
            </Row>
        </div>
    )
}
