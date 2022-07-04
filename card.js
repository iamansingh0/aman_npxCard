#!/usr/bin/env node

import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open';
import request from 'request';
import path from 'path';
import ora from 'ora';
import cliSpinners from 'cli-spinners';

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:amankumar7355197337@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },            
            {
                name: "Just quit.",
                value: () => {
                    console.log("See ya!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                        Aman Kumar Singh"),
    handle: chalk.white("@iamansingh0"),
    title: `${chalk.white("Blockchain Developer")}`,
    github: chalk.gray("https://github.com/") + chalk.red("iamansingh0"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.red("aman-kumar-singh-08b2b220b"),
    npx: chalk.red("npx") + " " + chalk.white("aman"),

    labelTitle: chalk.cyan.bold("           Title:"),
    labelGitHub: chalk.cyan.bold("          GitHub:"),
    labelLinkedIn: chalk.cyan.bold("        LinkedIn:"),
    labelCard: chalk.cyan.bold("            Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelTitle}  ${data.title}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "Hi, thanks for dropping by! "
        )}`,
        `${chalk.italic("     I am currently learning solidity, and hardhat and its tools. ")}`,
        `${chalk.italic(
            "           I want to become a nice blockchain developer in the community"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());