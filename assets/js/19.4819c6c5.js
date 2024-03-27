(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{416:function(a,t,r){"use strict";r.r(t);var s=r(2),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"垃圾回收机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制"}},[a._v("#")]),a._v(" 垃圾回收机制")]),a._v(" "),t("p",[a._v('在JavaScript中，"gc"代表垃圾回收（Garbage Collection） 。垃圾回收是一种自动内存管理机制，用于检测和清除不再使用的对象，以释放内存空间。当一个对象不再被引用时，垃圾回收器会将其标记为垃圾，然后在适当的时候清除这些垃圾对象，并将内存回收给系统以供其他对象使用。垃圾回收的目的是减少内存泄漏和提高程序的性能。\n在C和C++等语言中，开发者需要手动管理内存。虽然这种方式可以给开发者更大的灵活性和控制性，但也容易引起内存泄漏和悬挂指针等问题。而在JavaScript中，垃圾回收是由JavaScript引擎自动执行的，开发者无需手动管理内存。')]),a._v(" "),t("h2",{attrs:{id:"分伐回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分伐回收"}},[a._v("#")]),a._v(" 分伐回收")]),a._v(" "),t("p",[t("strong",[a._v("分伐回收(Generational Garbage Collection)")]),a._v(":V8使用分伐回收策略，将对象分为不同的代，通常包括新生代和老生代。新生代包含大多数新创建的对象，而老生代包含经过多次回收仍然存活的对象。这种策略有助于提高性能，因为新生代的对象通常比老生代的对象更容易回收")]),a._v(" "),t("h2",{attrs:{id:"标记-清除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除"}},[a._v("#")]),a._v(" 标记-清除")]),a._v(" "),t("p",[t("strong",[a._v("标记-清除(Mark and Sweep)")]),a._v(':这是一种更复杂的垃圾回收策略，它将内存中的所有对象分为"可达"和"不可达"两组。垃圾回收器首先标记所有可达对象，然后清除所有不可达对象。这个过程涉及两个阶段：标记阶段和清除阶段')]),a._v(" "),t("ul",[t("li",[a._v("标记阶段： 从根对象开始，垃圾回收器递归遍历所有对象，并标记为可达的镀锡")]),a._v(" "),t("li",[a._v("清除阶段：垃圾回收器清除所有未标记的对象，即不可达对象")])]),a._v(" "),t("h2",{attrs:{id:"增量回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增量回收"}},[a._v("#")]),a._v(" 增量回收")]),a._v(" "),t("p",[t("strong",[a._v("增量回收(Incremental Garbage Collection)")]),a._v(":这种策略将垃圾回收操作分解为多个小步骤，以运行在应用程序执行期间执行垃圾回收操作，减少对应用的中断")]),a._v(" "),t("h2",{attrs:{id:"并行回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并行回收"}},[a._v("#")]),a._v(" 并行回收")]),a._v(" "),t("p",[t("strong",[a._v("并行回收(Parallel Garbage Collection)")]),a._v(":允许多个线程同时进行垃圾回收操作，以提高性能")]),a._v(" "),t("h2",{attrs:{id:"压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[a._v("#")]),a._v(" 压缩")]),a._v(" "),t("p",[t("strong",[a._v("压缩(Compation)")]),a._v(":为了减少内存碎片，V8垃圾回收器会包括了内存压缩步骤，将存活对象移动到内存的连续位置，以提高内存使用效率")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("V8引擎中并没有使用引用计数(Referenec Counting)作为主要的垃圾回收策略，引用计数是一种简单的垃圾回收策略，它跟踪对象的引用次数，当引用次数降为零时，对象被回收。然而，引用计数在处理循环引用等情况时存在问题，并不够高效")]),a._v(" "),t("p",[a._v("V8的垃圾回收机制是一种复杂的混合策略，结合了多种技术，以优化内存管理和性能，这些技术的结合使得V8成为了一个高性能的JavaScript引擎")])])}),[],!1,null,null,null);t.default=e.exports}}]);