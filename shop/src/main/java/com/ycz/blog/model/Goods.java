package com.ycz.blog.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.math.BigDecimal;

@Entity
public class Goods extends BaseModel {

    @Column(name = "goods_name")
    private String goodsName;

    @Column(name = "goods_price")
    private BigDecimal price;

    @Column(name = "goods_img")
    private String goodsImg;

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
