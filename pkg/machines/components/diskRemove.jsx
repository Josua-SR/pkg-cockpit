/*
 * This file is part of Cockpit.
 *
 * Copyright (C) 2018 Red Hat, Inc.
 *
 * Cockpit is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * Cockpit is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Cockpit; If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react';

import { detachDisk } from '../actions/provider-actions.js';

const onDetachDisk = (dispatch, vm, target) => {
    return () => {
        dispatch(detachDisk({ connectionName:vm.connectionName, id:vm.id, name:vm.name, target, live: vm.state == 'running' }));
    };
};

const RemoveDiskAction = ({ dispatch, vm, target, idPrefixRow }) => {
    return (
        <button id={`${idPrefixRow}-detach`} className="btn btn-default btn-control-ct fa fa-minus" onClick={onDetachDisk(dispatch, vm, target)} />
    );
};

export default RemoveDiskAction;
