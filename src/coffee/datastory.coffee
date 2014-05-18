# class Datastory
#
#     constructor: ->
#         # Set default properties
#         @properties =
#             views: null
#(exports? or this).Datastory = Datastory
app = angular.module('datastory', ['angularCharts'])

app.controller('MainCtrl', ['$scope', ($scope) ->
    $scope.config =
        title: "Products"
        tooltips: true
        labels: false
        legend:
            display: true
            position: "right"

    $scope.data =
        series: [
            "Sales"
            "Income"
            "Expense"
            "Laptops"
            "Keyboards"
        ]
        data: [
            {
              x: "Laptops"
              y: [100, 500, 0]
              tooltip: "this is tooltip"
            },
            {
              x: "Desktops"
              y: [300, 100, 100]
            },
            {
              x: "Mobiles"
              y: [351]
            },
            {
              x: "Tablets"
              y: [54, 0, 879]
            }
        ]
])

angular.bootstrap document, ['datastory']