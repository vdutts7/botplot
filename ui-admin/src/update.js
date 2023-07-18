import Phaser from "phaser";

export default function update(time, delta) {

  if(this.randomDestinationKey.isDown) {
    this.gridEngine.moveTo("player", { x: 15, y: 18 });
  }

  if (this.playerView) {
    if (this.addPlantKey.isDown) {
      const playerPosition = this.gridEngine.getPosition("player");
      const tileX = playerPosition.x;
      const tileY = playerPosition.y;
  
      // 1: Get the grass layer
      const grassLayer = this.fieldMapTileMap.layers[0].tilemapLayer;
  
      // 2: (y/n) grass tile at the character's position and  (y/n) has property 'plantable'
      const grassTile = grassLayer.getTileAt(tileX, tileY);
      
      // 3: (y/n) no tile at the character's position in other layers?
      if (grassTile && grassTile.properties.plantable) {
        const noOtherTile = this.fieldMapTileMap.layers.every((layer, index) => {
          if (index === 0) return true; // Skip the grass layer
          return !layer.tilemapLayer.hasTileAt(tileX, tileY);
        });
  
        if (noOtherTile) {
          const { x: worldX, y: worldY } = this.fieldMapTileMap.tileToWorldXY(tileX, tileY);
  
          const plant = this.add.sprite(worldX, worldY, "plant");
  
          plant.setFrame(446);
          plant.setOrigin(0, 0);
          plant.scale = 3;
          this.plantLayer.add(plant);
        }
      }
    }
  
    if (this.removePlantKey.isDown) {
      const playerPosition = this.gridEngine.getPosition("player");
      const { x: worldX, y: worldY } = this.fieldMapTileMap.tileToWorldXY(playerPosition.x, playerPosition.y);
  
      // FIND ~ all plants overlapping
      const plantsToRemove = this.plantLayer.list.filter((plant) => {
        const distance = Phaser.Math.Distance.Between(plant.x, plant.y, worldX, worldY);
        return distance < (16 * 3) / 2;
      });
  
      // REMOVE ~ all plants overlapping
      plantsToRemove.forEach((plant) => {
        plant.destroy();
      });
    }
    
    if (this.cursors.left.isDown) {
      this.agent.moveAndCheckCollision("left", this.fieldMapTileMap);
    } else if (this.cursors.right.isDown) {
      this.agent.moveAndCheckCollision("right", this.fieldMapTileMap);
    } else if (this.cursors.up.isDown) {
      this.agent.moveAndCheckCollision("up", this.fieldMapTileMap);
    } else if (this.cursors.down.isDown) {
      this.agent.moveAndCheckCollision("down", this.fieldMapTileMap);
    }
  }
  else if (!this.playerView) {
    this.controls.update(delta);
  }
  
};