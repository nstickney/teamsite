// https://ihatetomatoes.net/react-tutorial-for-beginners
import React, { Component } from 'react';

class VZLinksBox extends Component {

    createTasks(vz) {
        return (
            <a class="dropdown-item" href={"vz/" + vz.link} download>{vz.name}</a>
        )
    }

    render() {

        var currentVms = [{
            name: "Antergos",
            link: "current/vzdump-qemu-antergos-2017.10.20.vma.gz"
        }, {
            name: "Haiku",
            link: "current/vzdump-qemu-haiku-2017.10.25.vma.gz"
        }, {
            name: "Kali Linux with OpenVAS",
            link: "current/vzdump-qemu-kali-openvas-2017.10.26.vma.gz"
        }, {
            name: "OPNSense",
            link: "current/vzdump-qemu-opnsense-2017.10.21.vma.gz"
        }, {
            name: "pfSense",
            link: "current/vzdump-qemu-pfsense-2017.10.20.vma.gz"
        }, {
            name: "Untangle",
            link: "current/vzdump-qemu-untangle-2017.10.20.vma.gz"
        }, {
            name: "Windows 10",
            link: "current/vzdump-qemu-windows10-2017.10.05.vma.gz"
        }]

        var curr = currentVms.map(this.createTasks);

        var oldVms = [{
            name: "Ubuntu 8",
            link: "old/vzdump-qemu-ubuntu-8-server-2017.10.05.vma.gz"
        }]

        var old = oldVms.map(this.createTasks);

        var vulnVms = [{
            name: "HolyNix",
            link: "vulnerable/vzdump-qemu-holynix-2017.10.02.vma.gz"
        }, {
            name: "HolyNix 2",
            link: "vulnerable/vzdump-qemu-holynix2-2017.10.02.vma.gz"
        }, {
            name: "Kioptrix",
            link: "vulnerable/vzdump-qemu-kioptrix-2017.10.02.vma.gz"
        }, {
            name: "Kioptrix 2",
            link: "vulnerable/vzdump-qemu-kioptrix2-2017.10.02.vma.gz"
        }, {
            name: "Kioptrix 3",
            link: "vulnerable/vzdump-qemu-kioptrix3-2017.10.02.vma.gz"
        }, {
            name: "Kioptrix 4",
            link: "vulnerable/vzdump-qemu-kioptrix4-2017.10.02.vma.gz"
        }, {
            name: "LAMP Security 4",
            link: "vulnerable/vzdump-qemu-lampsecurity4-2017.10.02.vma.gz"
        }, {
            name: "LAMP Security 5",
            link: "vulnerable/vzdump-qemu-lampsecurity5-2017.10.02.vma.gz"
        }, {
            name: "LAMP Security 6",
            link: "vulnerable/vzdump-qemu-lampsecurity6-2017.10.02.vma.gz"
        }, {
            name: "LAMP Security 8",
            link: "vulnerable/vzdump-qemu-lampsecurity8-2017.10.02.vma.gz"
        }, {
            name: "Metasploitable",
            link: "vulnerable/vzdump-qemu-metasploitable-2017.09.30.vma.gz"
        }, {
            name: "Metasploitable 2",
            link: "vulnerable/vzdump-qemu-metasploitable2-2017.09.30.vma.gz"
        }, {
            name: "Metasploitable 3",
            link: "vulnerable/vzdump-qemu-metasploitable3-2017.10.01.vma.gz"
        }, {
            name: "OWASP 1.2",
            link: "vulnerable/vzdump-qemu-owasp1.2-2017.10.02.vma.gz"
        }, {
            name: "PwnOS",
            link: "vulnerable/vzdump-qemu-pwnos-2017.10.02.vma.gz"
        }, {
            name: "Simple",
            link: "vulnerable/vzdump-qemu-simple-2017.10.02.vma.gz"
        }, {
            name: "Tr0ll",
            link: "vulnerable/vzdump-qemu-tr0ll-2017.10.02.vma.gz"
        }, {
            name: "Tr0ll 2",
            link: "vulnerable/vzdump-qemu-tr0ll2-2017.10.02.vma.gz"
        }, {
            name: "Vicnum 1.3",
            link: "vulnerable/vzdump-qemu-vicnum1.3-2017.10.02.vma.gz"
        }, {
            name: "Vicnum 1.4",
            link: "vulnerable/vzdump-qemu-vicnum1.4-2017.10.02.vma.gz"
        }, {
            name: "Vulnix",
            link: "vulnerable/vzdump-qemu-vulnix-2017.10.02.vma.gz"
        }]

        var vuln = vulnVms.map(this.createTasks);

        var btnClass = "btn btn-outline-dark border-0 dropdown-toggle m-0 p-2 w-100";

        return (
            <div className={this.props.p.classNames} style={this.props.p.styles}>
                <h6 className="card-header bg-orange text-cosmic">ProxMox Appliances</h6>
                <div className="dropdown">
                    <button className={btnClass} id="cMenuBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Current Machines</button>
                    <div className="dropdown-menu" aria-labelledby="cMenuBtn">{curr}</div>
                </div>
                <hr className="m-0" />
                <div className="dropdown">
                    <button className={btnClass} id="oMenuBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Outdated Machines</button>
                    <div className="dropdown-menu" aria-labelledby="oMenuBtn">{old}</div>
                </div>
                <hr className="m-0" />
                <div className="dropdown">
                    <button className={btnClass} id="vMenuBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Vulnerable By Design</button>
                    <div className="dropdown-menu" aria-labelledby="vMenuBtn">{vuln}</div>
                </div>
            </div>
        );
    }
}

export default VZLinksBox
