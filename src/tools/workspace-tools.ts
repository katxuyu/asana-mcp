import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const listWorkspacesTool: Tool = {
  name: "asana_list_workspaces",
  description: "List all available workspaces in Asana",
  inputSchema: {
    type: "object",
    properties: {
      opt_fields: {
        type: "string",
        description: "Comma-separated list of optional fields to include"
      }
    }
  }
};

export const getUsersInWorkspaceTool: Tool = {
  name: "asana_get_users_in_workspace",
  description: "Get users in a workspace or organization",
  inputSchema: {
    type: "object",
    properties: {
      workspace_gid: {
        type: "string",
        description: "Globally unique identifier for the workspace or organization"
      },
      limit: {
        type: "integer",
        description: "Results per page. The number of objects to return per page. The value must be between 1 and 100.",
        default: 50
      },
      offset: {
        type: "string",
        description: "Offset token. An offset to the next page returned by the API."
      },
      opt_fields: {
        type: "string",
        description: "Comma-separated list of optional fields to include"
      }
    },
    required: ["workspace_gid"]
  }
};

export const getUsersInTeamTool: Tool = {
  name: "asana_get_users_in_team",
  description: "Get users in a team",
  inputSchema: {
    type: "object",
    properties: {
      team_gid: {
        type: "string",
        description: "Globally unique identifier for the team"
      },
      limit: {
        type: "integer",
        description: "Results per page. The number of objects to return per page. The value must be between 1 and 100.",
        default: 50
      },
      offset: {
        type: "string",
        description: "Offset token. An offset to the next page returned by the API."
      },
      opt_fields: {
        type: "string",
        description: "Comma-separated list of optional fields to include"
      }
    },
    required: ["team_gid"]
  }
};

export const getUserTool: Tool = {
  name: "asana_get_user",
  description: "Get a user by their GID",
  inputSchema: {
    type: "object",
    properties: {
      user_gid: {
        type: "string",
        description: "Globally unique identifier for the user"
      },
      opt_fields: {
        type: "string",
        description: "Comma-separated list of optional fields to include"
      }
    },
    required: ["user_gid"]
  }
};

export const getMultipleUsersTool: Tool = {
  name: "asana_get_multiple_users",
  description: "Get multiple users",
  inputSchema: {
    type: "object",
    properties: {
      workspace: {
        type: "string",
        description: "The workspace in which to get users. Currently, this is required."
      },
      team: {
        type: "string",
        description: "The team in which to get users."
      },
      limit: {
        type: "integer",
        description: "Results per page. The number of objects to return per page. The value must be between 1 and 100.",
        default: 50
      },
      offset: {
        type: "string",
        description: "Offset token. An offset to the next page returned by the API."
      },
      opt_fields: {
        type: "string",
        description: "Comma-separated list of optional fields to include"
      }
    },
    required: ["workspace"]
  }
};
