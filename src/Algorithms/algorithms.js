import React from "react";

export default class Algorithms {
    bfs(array, startNode, endNode) {
        startNode = { row: startNode[0], col: startNode[1] };
        endNode = { row: endNode[0], col: endNode[1] };
        let queue = [];
        let visited = new Set();
        let distance = [];

        queue.push({ row: startNode[0], col: startNode[1] });
        visited.add({ row: startNode[0], col: startNode[1] });
        distance[startNode] = 0;
        while (queue.length > 0) {
            let current = queue.shift();
            if (visited.has(current) !== false) visited.add(current);
            distance[current] =
                startNode.row - current.row + startNode.col - current.col;
            if (current.row === endNode.row && current.col === endNode.col) {
                return distance[current];
            }
        }
    }
}
