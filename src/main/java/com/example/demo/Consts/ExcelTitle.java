package com.example.demo.Consts;

import com.google.common.collect.Lists;
import org.apache.commons.lang3.tuple.Pair;

import java.util.List;

public final class ExcelTitle {
    public static List<Pair<Integer,String>> getTotalDeviceFormTitle(){
        return Lists.newArrayList(
                Pair.of(0, ""),
                Pair.of(1,""),
                Pair.of(2, ""),
                Pair.of(3,""),
                Pair.of(4, ""),
                Pair.of(5,""),
                Pair.of(6, ""),
                Pair.of(7,"")

                );
    }
}
