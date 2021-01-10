import React from "react";
import PropTypes from "prop-types";
import ReactTabContentView from "../index";
import ReactJsonView from "react-json-view";

const externalDisplayComp = {
  data: [
    {
      title: "/pet/{petId}/uploadImage",
      content: {
        post: {
          tags: ["pet"],
          summary: "uploads an image",
          description: "",
          operationId: "uploadFile",
          consumes: ["multipart/form-data"],
          produces: ["application/json"],
          parameters: [
            {
              name: "petId",
              in: "path",
              description: "ID of pet to update",
              required: true,
              type: "integer",
              format: "int64",
            },
            {
              name: "additionalMetadata",
              in: "formData",
              description: "Additional data to pass to server",
              required: false,
              type: "string",
            },
            {
              name: "file",
              in: "formData",
              description: "file to upload",
              required: false,
              type: "file",
            },
          ],
          responses: {
            "200": {
              description: "successful operation",
              schema: {
                $ref: "#/definitions/ApiResponse",
              },
            },
          },
          security: [
            {
              petstore_auth: ["write:pets", "read:pets"],
            },
          ],
        },
      },
    },
    {
      title: "/pet",
      content: {
        post: {
          tags: ["pet"],
          summary: "Add a new pet to the store",
          description: "",
          operationId: "addPet",
          consumes: ["application/json", "application/xml"],
          produces: ["application/json", "application/xml"],
          parameters: [
            {
              in: "body",
              name: "body",
              description: "Pet object that needs to be added to the store",
              required: true,
              schema: {
                $ref: "#/definitions/Pet",
              },
            },
          ],
          responses: {
            "405": {
              description: "Invalid input",
            },
          },
          security: [
            {
              petstore_auth: ["write:pets", "read:pets"],
            },
          ],
        },
        put: {
          tags: ["pet"],
          summary: "Update an existing pet",
          description: "",
          operationId: "updatePet",
          consumes: ["application/json", "application/xml"],
          produces: ["application/json", "application/xml"],
          parameters: [
            {
              in: "body",
              name: "body",
              description: "Pet object that needs to be added to the store",
              required: true,
              schema: {
                $ref: "#/definitions/Pet",
              },
            },
          ],
          responses: {
            "400": {
              description: "Invalid ID supplied",
            },
            "404": {
              description: "Pet not found",
            },
            "405": {
              description: "Validation exception",
            },
          },
          security: [
            {
              petstore_auth: ["write:pets", "read:pets"],
            },
          ],
        },
      },
    },
    {
      title: "/pet/findByStatus",
      content: {
        get: {
          tags: ["pet"],
          summary: "Finds Pets by status",
          description:
            "Multiple status values can be provided with comma separated strings",
          operationId: "findPetsByStatus",
          produces: ["application/json", "application/xml"],
          parameters: [
            {
              name: "status",
              in: "query",
              description:
                "Status values that need to be considered for filter",
              required: true,
              type: "array",
              items: {
                type: "string",
                enum: ["available", "pending", "sold"],
                default: "available",
              },
              collectionFormat: "multi",
            },
          ],
          responses: {
            "200": {
              description: "successful operation",
              schema: {
                type: "array",
                items: {
                  $ref: "#/definitions/Pet",
                },
              },
            },
            "400": {
              description: "Invalid status value",
            },
          },
          security: [
            {
              petstore_auth: ["write:pets", "read:pets"],
            },
          ],
        },
      },
    },
    {
      title: "/pet/findByTags",
      content: {
        get: {
          tags: ["pet"],
          summary: "Finds Pets by tags",
          description:
            "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
          operationId: "findPetsByTags",
          produces: ["application/json", "application/xml"],
          parameters: [
            {
              name: "tags",
              in: "query",
              description: "Tags to filter by",
              required: true,
              type: "array",
              items: {
                type: "string",
              },
              collectionFormat: "multi",
            },
          ],
          responses: {
            "200": {
              description: "successful operation",
              schema: {
                type: "array",
                items: {
                  $ref: "#/definitions/Pet",
                },
              },
            },
            "400": {
              description: "Invalid tag value",
            },
          },
          security: [
            {
              petstore_auth: ["write:pets", "read:pets"],
            },
          ],
          deprecated: true,
        },
      },
    },
    {
      title: "/pet/{petId}",
      content: {
        get: {
          tags: ["pet"],
          summary: "Find pet by ID",
          description: "Returns a single pet",
          operationId: "getPetById",
          produces: ["application/json", "application/xml"],
          parameters: [
            {
              name: "petId",
              in: "path",
              description: "ID of pet to return",
              required: true,
              type: "integer",
              format: "int64",
            },
          ],
          responses: {
            "200": {
              description: "successful operation",
              schema: {
                $ref: "#/definitions/Pet",
              },
            },
            "400": {
              description: "Invalid ID supplied",
            },
            "404": {
              description: "Pet not found",
            },
          },
          security: [
            {
              api_key: [],
            },
          ],
        },
        post: {
          tags: ["pet"],
          summary: "Updates a pet in the store with form data",
          description: "",
          operationId: "updatePetWithForm",
          consumes: ["application/x-www-form-urlencoded"],
          produces: ["application/json", "application/xml"],
          parameters: [
            {
              name: "petId",
              in: "path",
              description: "ID of pet that needs to be updated",
              required: true,
              type: "integer",
              format: "int64",
            },
            {
              name: "name",
              in: "formData",
              description: "Updated name of the pet",
              required: false,
              type: "string",
            },
            {
              name: "status",
              in: "formData",
              description: "Updated status of the pet",
              required: false,
              type: "string",
            },
          ],
          responses: {
            "405": {
              description: "Invalid input",
            },
          },
          security: [
            {
              petstore_auth: ["write:pets", "read:pets"],
            },
          ],
        },
        delete: {
          tags: ["pet"],
          summary: "Deletes a pet",
          description: "",
          operationId: "deletePet",
          produces: ["application/json", "application/xml"],
          parameters: [
            {
              name: "api_key",
              in: "header",
              required: false,
              type: "string",
            },
            {
              name: "petId",
              in: "path",
              description: "Pet id to delete",
              required: true,
              type: "integer",
              format: "int64",
            },
          ],
          responses: {
            "400": {
              description: "Invalid ID supplied",
            },
            "404": {
              description: "Pet not found",
            },
          },
          security: [
            {
              petstore_auth: ["write:pets", "read:pets"],
            },
          ],
        },
      },
    },
    {
      title: "/store/order",
      content: {
        post: {
          tags: ["store"],
          summary: "Place an order for a pet",
          description: "",
          operationId: "placeOrder",
          consumes: ["application/json"],
          produces: ["application/json", "application/xml"],
          parameters: [
            {
              in: "body",
              name: "body",
              description: "order placed for purchasing the pet",
              required: true,
              schema: {
                $ref: "#/definitions/Order",
              },
            },
          ],
          responses: {
            "200": {
              description: "successful operation",
              schema: {
                $ref: "#/definitions/Order",
              },
            },
            "400": {
              description: "Invalid Order",
            },
          },
        },
      },
    },
    {
      title: "/store/order/{orderId}",
      content: {
        get: {
          tags: ["store"],
          summary: "Find purchase order by ID",
          description:
            "For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions",
          operationId: "getOrderById",
          produces: ["application/json", "application/xml"],
          parameters: [
            {
              name: "orderId",
              in: "path",
              description: "ID of pet that needs to be fetched",
              required: true,
              type: "integer",
              maximum: 10,
              minimum: 1,
              format: "int64",
            },
          ],
          responses: {
            "200": {
              description: "successful operation",
              schema: {
                $ref: "#/definitions/Order",
              },
            },
            "400": {
              description: "Invalid ID supplied",
            },
            "404": {
              description: "Order not found",
            },
          },
        },
        delete: {
          tags: ["store"],
          summary: "Delete purchase order by ID",
          description:
            "For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors",
          operationId: "deleteOrder",
          produces: ["application/json", "application/xml"],
          parameters: [
            {
              name: "orderId",
              in: "path",
              description: "ID of the order that needs to be deleted",
              required: true,
              type: "integer",
              minimum: 1,
              format: "int64",
            },
          ],
          responses: {
            "400": {
              description: "Invalid ID supplied",
            },
            "404": {
              description: "Order not found",
            },
          },
        },
      },
    },
    {
      title: "/store/inventory",
      content: {
        get: {
          tags: ["store"],
          summary: "Returns pet inventories by status",
          description: "Returns a map of status codes to quantities",
          operationId: "getInventory",
          produces: ["application/json"],
          parameters: [],
          responses: {
            "200": {
              description: "successful operation",
              schema: {
                type: "object",
                additionalProperties: {
                  type: "integer",
                  format: "int32",
                },
              },
            },
          },
          security: [
            {
              api_key: [],
            },
          ],
        },
      },
    },
  ],
};

const reactJsonAttributes = {
  theme: "monokai",
  iconStyle: "circle",
  groupArraysAfterLength: 100,
  indentWidth: 3,
  collapsed: 4,
  displayObjectSize: false,
  collapseStringsAfterLength: 50,
  displayDataTypes: false,
};

export default {
  title:
    "React Tab Content View/Pre-loaded Content Display/Using External Component",
  component: ReactTabContentView,
  argTypes: {
    src: {
      description:
        "This is input JSON data that you want to render using this component",
      table: {
        type: {
          summary:
            "Core data object should be of array type with 'title' and 'content' to be displayed.",
          detail:
            "Content should be compatible with the display component 'contentDisplayComponent'.",
        },
      },
    },
    titleDelete: {
      description:
        "Allows you to delete a title from view. Set it to 'false' if you don't want to provide this option.",
      table: {
        type: {
          summary:
            "You can remove a title from view by clicking the X mark on the title.",
          detail:
            "This option is to provide flexibility to users avoiding clutter by removing unwanted titles from view. Deleting the" +
            " title will remove it just from the current view and it will not delete the 'src' data.",
        },
        defaultValue: {
          summary: "true",
          detail: "Set it to false to turn it off.",
        },
      },
    },
    titleRefreshAll: {
      description:
        "Allows you to refresh and bring back the deleted titles. You can turn it off if 'titleDelete' above is set to 'false'.",
      table: {
        type: {
          summary: "Restores the deleted titles.",
          detail:
            "Shows refresh button icon on the top right corner of the title section for users to restore the view to initial state",
        },
        defaultValue: {
          summary: "default value is 'true'.",
          detail:
            "Set it to 'false' if you are not providing delete option using 'titleDelete'.",
        },
      },
    },
    contentDisplayComponent: {
      description: "External Component you want to use to display the content.",
      table: {
        type: {
          summary:
            "react-json-view is the external component used in this interactive demo.",
          detail:
            "https://github.com/mac-s-g/react-json-view is used as a sample display component to display the JSON content in tree" +
            " structure. You can use any such display component instead.",
        },
        defaultValue: {
          summary: "Empty",
          detail:
            "Uses native content rendering of text or markdown passed as content in the source data.",
        },
      },
    },
    contentDisplayAttributes: {
      description: "Attributes you want to pass to above custom component.",
      table: {
        type: {
          summary:
            "Pass a JSON object with key-value list of supported attributes.",
          detail:
            "Exclude the source data needed from the list as it will be passed explicitly by this component to display the content.",
        },
        defaultValue: {
          summary: "Empty",
          detail: "Needed when you are using external display component only.",
        },
      },
    },
  },
};

export const WithoutSubTab = (args) => (
  <ReactTabContentView
    {...args}
    src={externalDisplayComp}
    contentDisplayComponent={ReactJsonView}
    contentDisplayAttributes={reactJsonAttributes}
    defaultTitle={"/pet"}
  />
);

WithoutSubTab.args = {
  titleDelete: true,
  titleRefreshAll: true,
  contentDisplayComponent: ReactJsonView,
};

ReactTabContentView.propTypes = {
  theme: PropTypes.oneOf(["default", "orange"]),
  titleDelete: PropTypes.bool,
  titleRefreshAll: PropTypes.bool,
  src: PropTypes.object.isRequired,
  contentDisplayComponent: PropTypes.object,
  contentDisplayAttributes: PropTypes.array,
};
