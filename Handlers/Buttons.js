const { Perms } = require("../Validation/Permissions")
const { Client } = require("discord.js")
const ms = require("ms")
const { promisify } = require("util")
const { glob } = require("glob")
const PG = promisify(glob)
const Ascii = require("ascii-table")
/**
 * @param {Client} client
 */

module.exports = async (client) => {
    const Table = new Ascii("Buttons")

    const ButtonFiles = await PG(`${process.cwd().replace(/\\/g, "/")}/Buttons/*/*.js`)
    ButtonFiles.map(async (file) => {
        const buttonFile = require(file);

        if(!buttonFile.id) return;
        
        client.buttons.set(buttonFile.id, buttonFile);
        await Table.addRow(`${buttonFile.id}.js`, "Sucess");
        
    });
    console.log(Table.toString());
}