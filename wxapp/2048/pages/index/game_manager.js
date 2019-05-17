const Grid = require('./grid.js');

function GameManager(size, startTiles = 2) {
    this.size = size;
    this.startTiles = startTiles;
}
GameManager.prototype = {
    setup: function() {
        this.grid = new Grid(this.size);
        //随机添加方块
        this.addStartTiles();
        return this.grid.cells;
    },
    addStartTiles: function() {
        //有几块调用几次
        for (let i = 0; i < this.startTiles; i++) {
            this.addRandomTiles();
        }
    },
    addRandomTiles: function() {
        // 添加方块
        // 1. 位置 2. 数值

        const value = Math.random() < 0.9 ? 2 : 4;
        //grid有数据 知道哪些位置空着
        const positiom = this.grid.randomAvaiableCell()
    }
}

module.exports = GameManager;