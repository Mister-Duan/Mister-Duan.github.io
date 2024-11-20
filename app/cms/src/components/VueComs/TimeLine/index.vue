<template>
  <div
    :style="`background: linear-gradient(180deg, #f6f7fb 0%, #fcfcfd 100%); border-radius: 4px;height:${canExpand && !expand ? '312px' : 'auto'}`"
    ref="boxRef"
    class="timeline-box w-12/12 relative overflow-hidden"
  >
    <svg class="timeLineSvgBox">
      <defs>
        <marker
          id="arrowEnd"
          viewBox="0 0 12 12"
          refX="11"
          refY="6"
          markerWidth="12"
          markerHeight="12"
          orient="auto"
        >
          <path
            d="M2,2 L10,6 L2,10 L2,2 z"
            fill="#B2BBCE"
            stroke="#B2BBCE"
            stroke-opacity="1"
          ></path>
        </marker>
        <marker
          id="arrowStart"
          viewBox="0 0 4 12"
          refX="1"
          refY="6"
          markerWidth="4"
          markerHeight="12"
          orient="auto"
        >
          <path
            d="M0,2 L0,10 z"
            fill="#DADEE6"
            stroke="#DADEE6"
            stroke-opacity="1"
            stroke-width="2px"
          ></path>
        </marker>
      </defs>
      <g class="linkGroup"></g>
    </svg>
    <div class="divTimeBox"></div>
    <div
      :class="[
        {
          'absolute top-204px left-0px right-0px': canExpand && !expand,
        },
      ]"
    >
      <div
        v-if="canExpand"
        :class="[
          'flex items-end justify-center cursor-pointer !leading-20px text-14px text-blue-800',
          {
            'h-78px': canExpand && !expand,
            'h-20px': canExpand && expand,
          },
        ]"
        style="
          border-radius: 0px 0px 4px 4px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            #fbfbfd 100%
          );
        "
      >
        <span @click="expand = !expand"> {{ expand ? "收起" : "展开" }}</span>
      </div>
      <div
        :class="[
          'text-right text-12px mr-16px pb-8px',
          {
            'h-28px leading-20px': canExpand && !expand,
            'h-28px leading-20px mt-8px': !canExpand,
            'h-26px mt-8px !leading-18px text-12px': canExpand && expand,
          },
        ]"
        style="background: #fbfbfd"
      >
        <span style="color: #8993a4"
          >Tips：这是Mister.Duan开发的一个“会自动转向”时光抽</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
// import { Expand, BasicIcon } from "@nct/components";
import * as d3 from "d3";
import TreeNode from "./treeNode.vue";
import { forEach, cloneDeep, map, debounce, uniqueId } from "lodash-es";
import { ref, onMounted, watch, createVNode, render } from "vue";
import { useElementSize, useWindowSize, useRafFn } from "@vueuse/core";
// import { useRoute } from "vue-router";
const config = {
  height: 100,
  width: 146,
  margin: [12, 24, 0, 24],
  padding: [0, 40, 0, 40],
  gap: [12, 0],
};
const props = defineProps({
  time_lines: {
    type: Object,
    default: () => {
      return [
        {
          time: "1992-01-01",
          event: "出生",
        },
        {
          time: "1994-01-01",
          event: "离乡",
        },
        {
          time: "1995-01-01",
          event: "丑小鸭幼儿园",
        },
        {
          time: "1997-01-01",
          event: "小学",
        },
        {
          time: "2004-01-01",
          event: "初中",
        },
        {
          time: "2008-01-01",
          event: "高中",
        },
        {
          time: "2011-01-01",
          event: "大学",
        },
        {
          time: "2011-xx-xx",
          event: "谈恋爱",
        },
        {
          time: "2015-01-01",
          event: "大学毕业",
        },
        {
          time: "2015-07-01",
          event: "益海嘉里-秦皇岛",
        },
        {
          time: "2017-07-01",
          event: "益海嘉里-郑州",
        },
        {
          time: "2018-07-01",
          event: "合合信息+启信宝",
        },
        {
          time: "2020-xx-xx",
          event: "结婚",
        },
        {
          time: "2021-xx-xx",
          event: "第一辆汽车",
        },
        {
          time: "2021-01-01",
          event: "第一套房子",
        },
        {
          time: "2021-07-01",
          event: "JD",
        },
        {
          time: "2023-xx-xx",
          event: "儿子",
        },
        {
          time: "2024-xx-xx",
          event: "第一辆公路车",
        },
        {
          time: "xxx-xx-xx",
          event: "第一辆xxx",
        },
      ];
    },
  },
  tip: { type: String, default: "" },
  getScrollContainer: {
    type: Array,
    default: () => {
      return {};
    },
  },
  anchorLink: {
    type: Object,
    default: () => {
      return [];
    },
  },
});
// const route = useRoute();

const windowSize = useWindowSize();
const boxRef = ref(null);
const expand = ref(false); // 展开状态
const canExpand = ref(true); // 是否可以展开
const boxSize = useElementSize(boxRef);
const nodeData = ref([]);
let domeList = cloneDeep(
  map(props?.time_lines, (o) => {
    return {
      ...o,
      chart_key: uniqueId("chart_key"),
    };
  })
);
let NodeBox = null;
const renderTimeLine = () => {
  let nodeCount = domeList?.length;
  let boxW = boxSize.width.value;
  let itemBoxW = config.width;
  let itemBoxH = config.height;
  let contentW =
    boxW -
    config.margin[1] -
    config.margin[3] -
    config.padding[1] -
    config.padding[3];

  let colCount = Math.floor(contentW / (itemBoxW + config.gap[0]));
  let rowCount = Math.ceil(nodeCount / colCount);

  // 展开状态

  canExpand.value = rowCount >= 3;

  let wRealGap = (contentW - itemBoxW * colCount) / (colCount - 1);
  const path = d3.path();
  let xStart = config.margin[3] + config.padding[3];
  let yStart = config.margin[0];
  let r = 50;
  let rx = 50 - config.padding[1];
  let yL = -9;
  let engX = 40;
  forEach(domeList, (nodeItem, nodeIndex) => {
    let nodeRowIndex = Math.floor(nodeIndex / colCount); //0 开始
    let nodeColCount =
      nodeRowIndex % 2 === 0
        ? /** 奇数*/ Math.floor(nodeIndex % colCount)
        : /**偶数*/ colCount - 1 - Math.floor(nodeIndex % colCount); // 0 开始
    nodeItem.rowIndex = nodeRowIndex;
    nodeItem.colCount = nodeColCount;
    nodeItem.x =
      xStart +
      nodeColCount * itemBoxW +
      wRealGap +
      (nodeColCount - 1) * wRealGap;
    nodeItem.y =
      yStart + nodeRowIndex * itemBoxH + (nodeRowIndex - 1) * config?.gap[1];
  });
  path.moveTo(config.margin[3], yStart + itemBoxH / 2 + yL);
  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    let isOdd = rowIndex % 2;
    if (!isOdd) {
      //奇数
      let nodeItem =
        rowIndex === rowCount - 1
          ? domeList[domeList?.length - 1]
          : domeList[colCount - 1];
      let x0 = nodeItem.x + config.width - rx;
      let x1 = nodeItem.x + config.width - rx;
      let y0 =
        yStart +
        rowIndex * itemBoxH +
        (rowIndex - 1) * config?.gap[1] +
        itemBoxH / 2 +
        yL;
      let y1 =
        yStart +
        rowIndex * itemBoxH +
        (rowIndex - 1) * config?.gap[1] +
        itemBoxH / 2 +
        config?.gap[1] +
        itemBoxH +
        yL;
      if (rowIndex === rowCount - 1) {
        path.lineTo(x0 + engX, y0);
      } else {
        path.lineTo(x0, y0);
        path.arc(
          (x0 + x1) / 2,
          (y0 + y1) / 2,
          r,
          -Math.PI / 2,
          Number(Math.PI) / 2,
          false
        );
        path.lineTo(x1, y1);
      }
    } else {
      //偶数
      let nodeItem =
        rowIndex === rowCount - 1
          ? domeList[domeList?.length - 1]
          : domeList[0];
      let x0 = nodeItem.x + rx;
      let x1 = nodeItem.x + rx;
      let y0 =
        yStart +
        rowIndex * itemBoxH +
        (rowIndex - 1) * config?.gap[1] +
        itemBoxH / 2 +
        yL;
      let y1 =
        yStart +
        rowIndex * itemBoxH +
        (rowIndex - 1) * config?.gap[1] +
        itemBoxH / 2 +
        config?.gap[1] +
        itemBoxH +
        yL;
      if (rowIndex === rowCount - 1) {
        path.lineTo(x0 - engX, y0);
      } else {
        path.lineTo(x0, y0);
        path.arc(
          (x0 + x1) / 2,
          (y0 + y1) / 2,
          r,
          -Math.PI / 2,
          Number(Math.PI) / 2,
          true
        );
      }
    }
  }

  let links = [{ path }];

  let boxEl = d3.select(".divTimeBox");
  let svgH =
    itemBoxH * rowCount +
    (rowCount - 1) * config.gap[1] +
    config.margin[0] +
    config.margin[2];
  let svg = d3
    .select(".timeLineSvgBox")
    .attr("width", boxSize.width.value)
    .attr("height", svgH)
    .attr("viewBox", [0, 0, boxSize.width.value, svgH])
    .attr("style", `width: ${boxSize.width.value}px;height: ${svgH}px`)
    .attr("transform", `translate(0,0)`);
  let linkGroup = svg.select(".linkGroup");
  const updateCellImgFunAppend = (nodes) => {
    nodes.each((d, i, nodeList) => {
      let parentElement = nodeList[i];
      if (parentElement) {
        while (parentElement.firstChild) {
          parentElement.firstChild.remove();
        }
        let div = document.createElement("div");
        let vm = createVNode(TreeNode, {
          info: { ...d, key: i },
          anchorLink: props?.anchorLink,
          getScrollContainer: props?.getScrollContainer,
        });
        render(vm, div);
        parentElement.appendChild(div);
      }
    });
    // border-1px
    nodes.attr(
      "class",
      "absolute  top-0px left-0px w-146px h-100px transition-transform duration-300"
    );
    return nodes;
  };
  NodeBox = boxEl.selectAll("div").data(domeList, (d) => {
    return d?.chart_key;
  });
  const updateNodes = () => {
    NodeBox.join(
      (enter) => {
        return enter.append("div").call(updateCellImgFunAppend);
      },
      (update) => {
        return update.call(updateCellImgFunAppend);
      },
      (exit) => {
        return exit.remove();
      }
    )
      .attr("style", (d) => {
        return `transform:translate(${d.x}px,${d.y}px)`;
      })
      .transition()
      .duration(300);
  };

  function updateLinks(links) {
    linkGroup
      .selectAll("path")
      .data(links, (d, i) => {
        return i;
      })
      .join(
        (enter) => {
          return enter.append("path");
        },
        (update) => {
          return update;
        },
        (exit) => {
          return exit.remove();
        }
      )
      .transition()
      .duration(300)
      .attr("d", (...args) => {
        return args[0].path.toString();
      })
      .attr("style", () => {
        return "stroke:#DADEE6;stroke-width:1px;";
      })

      .attr("fill", () => {
        return "none";
      })
      .attr("marker-end", () => {
        return "url(#arrowEnd)";
      })
      .attr("marker-start", () => {
        return "url(#arrowStart)";
      });
  }

  updateLinks(links);
  updateNodes();
  nodeData.value = domeList;
};
const renderTimeLineDebounce = debounce(() => {
  return renderTimeLine();
}, 300);
watch(
  () => {
    return windowSize.width.value;
  },
  () => {
    renderTimeLineDebounce();
  },
  {
    deep: true,
  }
);

onMounted(() => {
  const { pause } = useRafFn(() => {
    if (boxSize?.width?.value > 1) {
      renderTimeLineDebounce();
      pause();
    }
  });
});
</script>

<style lang="less"></style>
