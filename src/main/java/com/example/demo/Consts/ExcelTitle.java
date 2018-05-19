package com.example.demo.Consts;

import com.google.common.collect.Lists;
import org.apache.commons.lang3.tuple.Pair;

import java.util.List;

public final class ExcelTitle {
    public static List<Pair<Integer,String>> getTotalDeviceFormTitle(){
        return Lists.newArrayList(
                Pair.of(0, "#"),
                Pair.of(1,"设备种类"),
                Pair.of(2, "设备类别"),
                Pair.of(3,"设备品种"),
                Pair.of(4, "设备代码"),
                Pair.of(5,"单位内编号"),
                Pair.of(6, "停用开始日期"),
                Pair.of(7,"停用结束日期"),
                Pair.of(8,"注销日期"),
                Pair.of(9, "使用单位填表人员"),
                Pair.of(10,"登记机关"),
                Pair.of(11, "申请日期"),
                Pair.of(12,"发证日期"),
                Pair.of(13,"使用登记证编号")
                );
    }

    public static List<Pair<Integer, String>> getTotalRegistDetailForm(){
        return Lists.newArrayList(
                Pair.of(0, "#"),
                Pair.of(1,"使用单位名称"),
                Pair.of(2, "设备种类"),
                Pair.of(3,"设备类别"),
                Pair.of(4, "设备品种"),
                Pair.of(5,"设备代码"),
                Pair.of(6, "登记类别"),
                Pair.of(7,"停用开始日期"),
                Pair.of(8,"停用结束日期"),
                Pair.of(9,"注销日期"),
                Pair.of(10,"登记机关/人员"),
                Pair.of(11, "申请日期"),
                Pair.of(12,"发证日期"),
                Pair.of(13,"使用登记证编号")
        );
    }
}
