using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using CommandLine;

public class StartOptions
{
    [Option("autoEnd", Required = false, Default = true)]
    public bool autoEnd { get; set; }

    [Option("path", Required = true)]
    public string path { get; set; }

}